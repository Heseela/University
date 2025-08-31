export const fetchData = async (data) => {
    try {
      const res = await fetch(`https://api.university.e-aribt.com/api/${data}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const text = await res.text();
      const json = text ? JSON.parse(text) : {}; 
  
      return json;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; 
    }
  };
 

export const postData = async (url, data) => {
  try {
    const res = await fetch(`https://api.university.e-aribt.com/api/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type");
    const raw = await res.text();

    console.log("🔍 Response Content-Type:", contentType);
    console.log("📦 Raw Response:", raw);

    if (!contentType?.includes("application/json")) {
      throw new Error("Server did not return JSON. Raw response:\n" + raw);
    }

    const json = JSON.parse(raw);
    return json;
  } catch (error) {
    console.error(" Post error:", error.message);
    throw error;
  }
};
