import "server-only";

export const serverfunction = () => {
    console.log(`
        use env files,
        use secret token and API keys
        provide confidentiality`);

    return "result from server";
}