"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { UserLoginForm } from "./UserLoginForm";
import { UserRegisterForm } from "./UserRegisterForm";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components.",
};

export default function LoginForm() {
	const [flag, setFlag] = useState<boolean>(false);
	// 切换登录还是注册 true 注册
	const toggleFlag = () => {
		setFlag(!flag);
	};

	return (
		<>
			<div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<Button
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}
					onClick={toggleFlag}
				>
					{flag ? "Register" : "Login"}
				</Button>
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M12 2c-5.523 0-10 4.477-10 10 0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8zm2-10.5h-4m0 0v-4m0 4l4-4" />
						</svg>
						Typhoon Visualization Application
					</div>
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;This application is designed for visualizing the movement
								paths of typhoons. It utilizes the Next.js framework and the
								Mapbox plugin for displaying maps. You can experience the
								typhoon visualization by logging into the system.&rdquo;
							</p>
							<footer className="text-sm">Wang Yu</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						{flag ? (
							<>
								<div className="flex flex-col space-y-2 text-center">
									<h1 className="text-2xl font-semibold tracking-tight">
										Login
									</h1>
									<p className="text-sm text-muted-foreground">
										Enter your email and password to login your account
									</p>
								</div>
								<UserLoginForm />
							</>
						) : (
							<>
								<div className="flex flex-col space-y-2 text-center">
									<h1 className="text-2xl font-semibold tracking-tight">
										Create an account
									</h1>
									<p className="text-sm text-muted-foreground">
										Enter your email below to create your account
									</p>
								</div>
								<UserRegisterForm />
							</>
						)}
						<p className="px-8 text-center text-sm text-muted-foreground">
							By clicking continue, you agree to our{" "}
							<Link
								href="/terms"
								className="underline underline-offset-4 hover:text-primary"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className="underline underline-offset-4 hover:text-primary"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
