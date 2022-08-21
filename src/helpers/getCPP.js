


export const getCPP = (propios, finan, inv, tPropios, tFinan) => {
	const tPartProp = (propios * 100) / inv;
	const tPartFinan = (finan * 100) / inv;

	const tasaPropios = tPropios / 100;
	const tasaFinan = tFinan / 100;

	const cpp = (tPartProp * tasaPropios) + (tPartFinan * tasaFinan);
	console.log(tPartProp, tasaPropios, tPartFinan, tasaFinan, cpp);
	console.log(cpp, ' Este es el cppq')

	return Number.parseFloat(cpp).toFixed(2);

}