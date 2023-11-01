import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
        {/* <Navbar /> */}
			<div style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}>
				<Outlet />
			</div>
			
		</>
	);
};

export default RootLayout;
