export async function correctText(input) {
  try {
    const response = await fetch('https://korrect-back.onrender.com/api/correct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sentence: input, mode: mode }),
    });

    if (!response.ok) {
      throw new Error("API 응답 실패");
    }

    const data = await response.json();
    return data.corrected || "⚠️ 응답은 왔지만 교정 결과가 없습니다.";

  } catch (error) {
    console.error("맞춤법 교정 오류:", error);
    return "❌ 교정 중 오류가 발생했습니다.";
  }
}
