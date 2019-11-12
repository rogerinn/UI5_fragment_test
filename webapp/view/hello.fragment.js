sap.ui.define(["sap/m/Button"], function (Button) {
	sap.ui.jsfragment("testes2.Testes2.view.hello", {
		createContent: function (oController) {
			var oFooter = new sap.m.Bar({
				contentLeft: [
					new Button({
						text: "Editar Venda",
						type: "Up"
					})
				],
				contentRight: [
					new Button({
						text: "Salvar Venda",
						type: "Accept",
						press: [oController.onApproveDialog]
					})
				]
			});
			return oFooter;
		}
	});
});