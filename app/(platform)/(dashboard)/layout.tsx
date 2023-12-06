import NavBar from "./_components/navbar";

const DashboardLayout = ({
    children
} : { children : React.ReactNode }) => {

    return (
        <div className="flex bg-red-400 h-full justify-center items-center transition hover:bg-red-300">
            <NavBar />
            {children}
        </div>
    )
}

export default DashboardLayout;