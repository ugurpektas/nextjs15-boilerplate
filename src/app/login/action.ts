// Server action
export async function loginAction(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    // Email validasyonu
    if (!email || !password) {
      return { error: "Email ve şifre zorunludur", success: false };
    }

    // Burada kendi authentication işlemlerinizi yapabilirsiniz
    // Örnek: await signIn(email, password)

    return { error: null, success: true };
  } catch (error) {
    return { error: "Giriş işlemi başarısız oldu", success: false };
  }
}
