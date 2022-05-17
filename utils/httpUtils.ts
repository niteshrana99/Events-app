export const postData = async (data: any, url: string) => {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
        });
        response = await response.json();
        return response;
}