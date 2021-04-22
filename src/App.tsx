import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import profile from './0.jpeg';

const App: FC = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center h-screen w-screen'>
				<div className='flex flex-row md:flex-col rounded-lg bg-red-200 h-1/3 w-auto md:h-auto md:w-1/3 p-0 md:p-2 m-12 md:m-auto md:items-center md:justify-center text-center'>
					<img
						className='h-auto w-auto md:h-32 md:w-32 rounded-lg md:rounded-full'
						src={profile}
					/>
					<div className='flex flex-col justify-center items-center'>
						<div>
							Hi, I'm a Web Development Engineer. This static
							website uses React with Typescript and Tailwind.
						</div>
						<div className='text-pink-600'>Kali</div>
						<div className='text-gray-500'>Engineer, JS/TS</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default hot(App);
