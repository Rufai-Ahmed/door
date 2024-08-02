export const sendCost: (
	name: string,
	service: string,
	email: string,
	floorArea: string
) => Promise<void> = async (name, service, email, floorArea) => {
	try {
		await fetch("/api/cost", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, service, floorArea }),
		});
	} catch (err) {
		throw err;
	}
};
