// Responsive App Framework

$( document ).bind( 'pageinit' , function() {

	//setup variables
	var docWem = 1/16 * $( window ).width();
	var docWpx = $( window ).width();

	//width boolean, using ems
	function isWide( w ) {
		if( w > 49 ) {
			return true;
		} else {
			return false;
		}
	}

	//click handlers
	//assign handheld functionality first
	function clickEnable() {
		$( '.ui-block-a' ).on( 'click' , function() {
			$( this ).removeClass( 'translate3dIn' ).addClass( 'translate3dOutLeft animate absolute' );
			$( '.ui-block-b' ).removeClass( 'translate3dOutRight' ).addClass( 'translate3dIn animate' );
		});

		$( '.ui-block-b' ).on( 'click' , function() {
			$( this ).removeClass( 'translate3dIn' ).addClass( 'translate3dOutRight animate' );
			$( '.ui-block-a' ).removeClass( 'translate3dOutLeft' ).addClass( 'translate3dIn animate' );
		});
	}
	clickEnable();

	//disable on wider windows
	function clickDisable() {
		$( '.ui-block-a' ).off( 'click' );
		$( '.ui-block-b' ).off( 'click' );
	}
	if( isWide( docWem ) ) {
		clickDisable();
	}

	//handle tablet rotation
	$( window ).on( 'orientationchange' , function( event ) {

		//save if post is focused, for special handling below
		if( $( '.ui-block-b' ).hasClass( 'translate3dIn' ) == true ) { //change to post selected, once links added
			var postFocused = true;
		}

		//reset all animation classes
		$( '.ui-block-a' ).removeClass( 'absolute animate translate3dIn translate3dOutLeft' );
		$( '.ui-block-b' ).removeClass( 'animate translate3dIn translate3dOutRight' );

		var docWem = null;
		var docWem = 1/16 * $( window ).width();

		if( event.orientation == 'landscape' && isWide( docWem ) ) {
			$( '.ui-block-a' ).addClass( 'translate3dIn animate' );
			$( '.ui-block-b' ).addClass( 'translate3dIn animate' );
			clickDisable();
		}
		else {
			if( postFocused ) {
				$( '.ui-block-a' ).addClass( 'translate3dOutLeft absolute' );
				$( '.ui-block-b' ).addClass( 'translate3dIn' );
			} else {
				$( '.ui-block-a' ).addClass( 'translate3dIn animate absolute' );
				$( '.ui-block-b' ).addClass( 'translate3dOutRight animate' );
			}
			clickEnable();
		}
	});

});