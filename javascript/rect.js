function Rect( x, y, w, h )
{
	this.x = x || 0;
	this.y = y || 0;
	this.w = w || 0;
	this.h = h || 0;

	this.line = "2";

	this.lineColorStyle = Math.getRGBA( 0xff000000 );
	this.colorStyle = Math.getRGBA( 0xffffffff );

	this.setLineColor = function( color )
	{
		this.lineColorStyle = Math.getRGBA( color );
	}
	
	this.setColor = function( color )
	{
		this.colorStyle = Math.getRGBA( color );
	}

	this.draw = function( e )
	{
		var context = window.context;
		context.save( );
		context.beginPath( );
		context.lineWidth = this.line;
		context.fillStyle = this.colorStyle;
		context.strokeStyl = this.lineColorStyle;
		context.rect( this.x, this.y, this.w, this.h );
		context.closePath( );
		context.fill( );
		context.stroke( );
		context.restore( );
	}
}