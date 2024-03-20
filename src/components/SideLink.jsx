function SideLink({ img_src, link_text }) {
    return (
        <div className="side-link">
            <div className="side-img"><img src={img_src} alt="" /></div>
            <div className="side-text">{link_text}</div>
        </div>
    )
}

export default SideLink

