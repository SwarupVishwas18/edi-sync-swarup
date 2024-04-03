import SideLink from "./SideLink"

function Sidebar() {
    return (
        <div className="sidebar">
            <SideLink img_src="" link_text="Dashboard" isActive={true} />
            <SideLink img_src="" link_text="Project Documents" isActive={false} />
            <SideLink img_src="" link_text="Tasks" isActive={false} />
        </div>
    )
}

export default Sidebar