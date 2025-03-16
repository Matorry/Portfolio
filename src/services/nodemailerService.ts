export interface ContactData {
  name: string;
  email: string;
  message: string;
}

const urlBase = 'https://wr-mail-service.onrender.com';

export async function sendContact(data: ContactData): Promise<Response> {
  try {
    const response = await fetch(`${urlBase}/users/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Error contacting server');
    }
    return response;
  } catch (error) {
    console.error('Error contacting server:', error);
    throw error;
  }
}
