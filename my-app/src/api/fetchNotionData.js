// src/api/fetchNotionData.js
const fetchNotionData = async () => {
  const databaseId = "ad81fb8562cd4323a48478b5e2d746ef"; // 노션 데이터베이스 ID
  const apiKey = "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"; // 노션 API 키

  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from Notion");
  }

  const data = await response.json();
  return data.results;
};

export default fetchNotionData;
