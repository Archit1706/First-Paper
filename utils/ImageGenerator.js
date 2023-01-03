const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const imageGenerator = async (prompt) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });
    return response.data[0]["url"];
}

export default imageGenerator;