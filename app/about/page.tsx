import db from "@/app/utils/db";

async function AboutPage() {
    const profile = await db.user.create({
        data: {
            email: "mielie2@pitt.com",
            name: "Mielie Pitt",
        },
    });
    const users = await db.user.findMany();
    return (
        <div>
            {users.map((user) => {
                return (
                    <h2 key={user.id}>
                        {user.email} <span>{user.name}</span>
                    </h2>
                );
            })}
        </div>
    );
}
export default AboutPage;
