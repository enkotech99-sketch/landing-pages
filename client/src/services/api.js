export const getBusinessInfo = async () => {
  const res = await fetch("/api/business-info");
  if (!res.ok) throw new Error("Error fetching business info");
  return res.json();
};

export const sendContact = async (data) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error sending contact");
  return res.json();
};