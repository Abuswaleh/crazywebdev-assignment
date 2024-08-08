const MenuItem = ({ data }) => {
	return (
		<div className="menuitem">
			<div className="itemimg">image</div>
			<h3>{data.name}</h3>
			<p>{data.info}</p>
			<button>view details...</button>
			<span>{data.price}</span>
		</div>
	);
};

export default MenuItem;
