sap.ui.jsview("testes2.Testes2.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function () {
		return "testes2.Testes2.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function (oController) {
	    var hLayout = new sap.ui.layout.HorizontalLayout({}); 
		
		var myFragment = sap.ui.jsfragment( "testes2.Testes2.view.hello" , oController ); 
		// here the fragment is instantiated       
		hLayout.addContent(myFragment); 

		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			id: "page",
			content: [myFragment]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});