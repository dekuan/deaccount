var assert	= require( 'assert' );
var deaccount	= require( '../dist/deaccount' );


/**
 *	test
 */
describe( 'deaccount.js', function()
{
	describe( 'isValidUserStatus', function()
	{
		it ( 'deaccount.CONST.USER_STATUS_UNKNOWN should be a invalid user status', function()
		{
			assert.equal( deaccount.LIB.isValidUserStatus( deaccount.CONST.USER_STATUS_UNKNOWN ), false );
		});
		it ( 'deaccount.CONST.USER_STATUS_OKAY should be a valid user status', function()
		{
			assert.equal( deaccount.LIB.isValidUserStatus( deaccount.CONST.USER_STATUS_OKAY ), true );
		});
		it ( 'deaccount.CONST.USER_STATUS_LOCKED should be a valid user status', function()
		{
			assert.equal( deaccount.LIB.isValidUserStatus( deaccount.CONST.USER_STATUS_LOCKED ), true );
		});
		
		
	});


	describe( 'isValidUserGender', function()
	{
		it ( 'deaccount.CONST.USER_GENDER_UNKNOWN should be a valid gender', function()
		{
			assert.equal( deaccount.LIB.isValidUserGender( deaccount.CONST.USER_GENDER_UNKNOWN ), true );
		});
		it ( 'deaccount.CONST.USER_GENDER_MALE should be a valid gender', function()
		{
			assert.equal( deaccount.LIB.isValidUserGender( deaccount.CONST.USER_GENDER_MALE ), true );
		});
		it ( 'deaccount.CONST.USER_GENDER_FEMALE should be a valid gender', function()
		{
			assert.equal( deaccount.LIB.isValidUserGender( deaccount.CONST.USER_GENDER_UNKNOWN ), true );
		});
		it ( 'deaccount.CONST.XXX should be invalid', function()
		{
			assert.equal( deaccount.LIB.isValidUserGender( deaccount.CONST.XXX ), false );
		});
		it ( '1234 should be invalid', function()
		{
			assert.equal( deaccount.LIB.isValidUserGender( 1234 ), false );
		});
		
	});

});