import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <h1 className="text-2xl text-blue-700">Login</h1>
        <Form method="post">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="p-1 text-blue-600 border border-blue-600 rounded-md w-full" type="email" name="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className="p-1 text-blue-600 border border-blue-600 rounded-md w-full" type="password" name="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Password</label>
            <input className="p-1 text-blue-600 border border-blue-600 rounded-md w-full" type="text" name="name" id="name" placeholder="Enter your name" required />
          </div>
          <button type="submit" className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-500 p-2 rounded-md">Login</button>
        </Form>
      </div>
    </div>
  );
}


