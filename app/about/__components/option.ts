export const sendMail = (email: string) => {
  fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then((res) => {
    console.log(res);
  });
};
