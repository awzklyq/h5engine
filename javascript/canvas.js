function LCanvas( id )
{
	if ( id == null )
	{
		alert("creat Canvas id is null!");
	}

	this.canvas = document.createElement( 'canvas' );
	this.canvas.setAttribute( "id", id ); 

	this.bindImage = function( limge, x, y, w, h, sx, sy, sw, sh )
	{
		var self = this;
		limge.setLoadCallBack(function( )
		{
			self.canvas.setAttribute( "width", limge.w ); 
			self.canvas.setAttribute( "height", limge.h );  
			var context = window.context;
			window.context = self.canvas.getContext('2d');
			if ( sh != null )
			{
				limge.drawImage( x, y, w, h, sx, sy, sw, sh );
			}
			else if ( sw != null )
			{
				limge.drawImage( x, y, w, h, sx, sy, sw );
			}
			else if ( sy != null )
			{
				limge.drawImage( x, y, w, h, sx, sy );
			}
			else if ( sx != null )
			{
				limge.drawImage( x, y, w, h, sx );
			}
			else if ( h != null )
			{
				limge.drawImage( x, y, w, h );
			}
			else if ( w != null )
			{
				limge.drawImage( x, y, w );
			}
			else if ( y != null )
			{
				limge.drawImage( x, y );
			}
			else if ( x != null )
			{
				limge.drawImage( x );
			}
			else
			{
				limge.drawImage( );
			}

			window.context = context;
		});
		
	}

	this.draw = function( x, y, w, h, sx, sy, sw, sh )
	{
		var context = window.context;
		var img = this.canvas
		if ( img != null )
		{
			context.save( );
			if ( arguments.length == 0 )
			{
				context.drawImage( img, this.x, this.y, this.w, this.h );
			}
			else if ( arguments.length == 2 )
			{
				context.drawImage( img, x, y );
			}
			else if ( arguments.length == 4 )
			{
				context.drawImage( img, x, y, w, h );
			}
			else if ( arguments.length == 8 )
			{
				context.drawImage( img, x, y, w, h, sx, sy, sw, sh );
			}
			context.restore( );
		}
	}
}