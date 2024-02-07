interface authLayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: authLayoutProps) => {
	return <div className="h-full flex justify-center items-center">{children}</div>;
};

export default layout;
