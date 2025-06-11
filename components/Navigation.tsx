import NavigationItem from "./NavigationItem";


const Navigation = () => {
    return (
        <nav className="flex flex-col w-1/8 pl-10 box-border">
            
            <div className="font-bold text-lg">
                It's My Life
            </div>

            <NavigationItem route="/dashboard" text="Dashboard" />
            <NavigationItem route="/settings" text="Settings" />
            <NavigationItem route="/help" text="Help" />
        </nav>
    )
}

export default Navigation;