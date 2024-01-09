export function sendToWhatsApp (name, price) {
    const numeroDestino = "+5584987137129";
    const mensagem = "Olá, esse produto está disponível?";

    const url =
      "https://wa.me/" +
      numeroDestino +
      "?text=" +
      mensagem +
      "%0a%0a" +
      "Nome: " +
      name +
      "%0a" +
      "Preço: " +
      price;
    window.open(url, "_blank").focus();
}
