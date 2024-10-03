"use client";

import axios from "axios";
import React from "react";

function SignupForm(props) {
	const handleFocusInput = (e) => {
		const labels = document.getElementsByTagName("label");
		e.target.style.borderColor = "rgb(30 64 175)";
		for (let i = 0; i < labels.length; i++) {
			const label = labels[i];
			if (e.target.id == label.htmlFor) {
				label.style.transform = "translateY(-20px)";
				label.style.color = "rgb(30 64 175)";
			}
		}
	};
	const handleBlurInput = (e) => {
		const labels = document.getElementsByTagName("Label");
		if (!e.target.value) {
			for (let i = 0; i < labels.length; i++) {
				const label = labels[i];
				if (e.target.id == label.htmlFor) {
					label.style.transform = "translateY(0px)";
					label.style.color = "rgb(107 114 128)";
				}
				e.target.style.borderColor = "rgb(209 213 219)";
			}
		}
	};

	const handleGoogleSignUp = async (e) => {
		axios.get("http://localhost:8000/auth/google");
	};

	return (
		<div className=" bg-white p-5 border">
			<h1 className=" mb-3 text-center text-2xl font-bold text-blue-900">
				Signup
			</h1>
			<form action="#" className="flex flex-col space-y-4 pt-3">
				<div className="relative flex flex-col">
					<input
						type="text"
						id="signup_form_name"
						className=" border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
						required
						name="name"
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
					/>
					<label
						htmlFor="signup_form_name"
						className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in "
					>
						Name
					</label>
				</div>

				<div className="relative pt-[10px]">
					<span className="  flex justify-between  rounded-md  h-9 w-80">
						<input
							id="signup_form_number"
							name="signup_form_number"
							type="text"
							className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
							onFocus={handleFocusInput}
							onBlur={handleBlurInput}
						/>
						<button className=" bg-black bg-opacity-70 rounded-md text-white font-semibold text-[13px] w-24">
							Send OTP
						</button>
					</span>
					<label
						htmlFor="signup_form_number"
						className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
					>
						Mobile Number
					</label>
				</div>
				<div className="relative pt-[10px]">
					<input
						id="signup_form_email"
						type="text"
						name="signup_form_email"
						className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
					/>
					<label
						htmlFor="signup_form_email"
						className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
					>
						Email Id
					</label>
				</div>
				<div className="relative pt-[10px]">
					<input
						id="signup_form_password"
						type="text"
						name="signup_form_password"
						className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
					/>
					<label
						htmlFor="signup_form_password"
						className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
					>
						Password
					</label>
				</div>

				{/* <Hero_Dropdown></Hero_Dropdown> */}

				<button
					type="submit"
					className="h-10 bg-black bg-opacity-70 font-bold text-white"
				>
					Submit
				</button>
			</form>
			<div className="mt-4 flex items-center flex-col">
				<div className="  z-30 bg-white w-12 relative text-center top-3 text-opacity-70 text-black font-bold ">
					OR
				</div>
				<div className=" bg-black h-[2px] w-full  opacity-30"></div>
				{/* <span className=" mt-5 h-9 w-[99px] bg-black"></span> */}
			</div>
			<div className=" mt-6">
				<button
					className=" p-2 flex w-full items-center justify-center border"
					onClick={handleGoogleSignUp}
				>
					<span>
						<img className=" w-8" src="icon/google.svg" alt="" />
					</span>
					Sign up with Google
				</button>
			</div>
		</div>
	);
}

export default SignupForm;
