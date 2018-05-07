<?php

namespace dekuan\debook;

use dekuan\vdata\CConst;


/**
 *	Class CAccountConst
 *	@package dekuan\debook
 */
class CAccountConst extends CConst
{
	//
	//	default values
	//
	const DEFAULT_PAGE		= 1;		//	page number
	const DEFAULT_PAGE_SIZE		= 10;		//	page size

	//	...
	const USER_STATUS_UNKNOWN	= -1;		//	user status unknown
	const USER_STATUS_OKAY		= 1;		//	user status okay
	const USER_STATUS_LOCKED	= 2;		//	user status locked


	//
	//	u_gender
	//
	const USER_GENDER_UNKNOWN	= 0;		//	未知
	const USER_GENDER_MALE		= 1;		//	男性
	const USER_GENDER_FEMALE	= 2;		//	女性


	//
	//	OAuth type
	//
	const OAUTH_TYPE_UNKNOWN	= 0;
	const OAUTH_TYPE_WECHAT		= 1;
	const OAUTH_TYPE_QQ		= 2;


	//
	//	OAuth status
	//
	const OAUTH_STATUS_UNKNOWN	= 0;
	const OAUTH_STATUS_ENABLED	= 1;
	const OAUTH_STATUS_DISABLED	= 2;


	//
	//	Redirect
	//
	const REDIRECT_UNKNOWN		= 0;
	const REDIRECT_INFO		= 1;
	const REDIRECT_LOGIN_SUCCESS	= 2;
	const REDIRECT_BIND_MOBILE	= 3;
	const REDIRECT_LOGIN_FAILED	= 4;

	


	////////////////////////////////////////////////////////////////////////////////
	//	functions
	//
	static function isValidUserStatus( $nVal )
	{
		return ( is_numeric( $nVal ) &&
			(
				self::USER_STATUS_OKAY == $nVal ||
				self::USER_STATUS_LOCKED == $nVal
			) );
	}

	static function isValidUserGender( $nVal )
	{
		return ( is_numeric( $nVal ) &&
			(
				self::USER_GENDER_UNKNOWN == $nVal ||
				self::USER_GENDER_MALE == $nVal ||
				self::USER_GENDER_FEMALE == $nVal
			) );
	}

	static function isValidOAuthType( $nVal )
	{
		return ( is_numeric( $nVal ) &&
			(
				self::OAUTH_TYPE_UNKNOWN == $nVal ||
				self::OAUTH_TYPE_WECHAT == $nVal ||
				self::OAUTH_TYPE_QQ == $nVal
			) );
	}

	static function isValidOAuthStatus( $nVal )
	{
		return ( is_numeric( $nVal ) &&
			(
				self::OAUTH_STATUS_UNKNOWN == $nVal ||
				self::OAUTH_STATUS_ENABLED == $nVal ||
				self::OAUTH_STATUS_DISABLED == $nVal
			) );
	}

	static function isValidRedirect( $nVal )
	{
		return ( is_numeric( $nVal ) &&
			(
				self::REDIRECT_UNKNOWN == $nVal ||
				self::REDIRECT_INFO == $nVal ||
				self::REDIRECT_LOGIN_SUCCESS == $nVal ||
				self::REDIRECT_BIND_MOBILE == $nVal ||
				self::REDIRECT_LOGIN_FAILED == $nVal
			) );
	}

}