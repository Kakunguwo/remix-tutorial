/* eslint-disable @typescript-eslint/no-unused-vars */
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export const users: User[] = [
    {
        id: "1",
        name: "Ronnie Kakunguwo",
        email: "ronnie@remix.com",
        password: "password1",
    },
    {
        id: "2",
        name: "Baba Chelevita",
        email: "babachele@remix.com",
        password: "password2",
    },
    {
        id: "2",
        name: "Kronicles Kays",
        email: "kron@remix.com",
        password: "password3",
    },
];


export const addUser = (user: User) => {
    const existingUser = findUserByEmailPassword(user.email, user.password)

    if (!existingUser) {
        users.push(user)
    }

}
export const findUser = (id: string) => { }
export const findUserByEmailPassword = (email: string, password: string) => users.find((u) => u.email === email && u.password === password);
export const deleteUser = (id: string) => { }
