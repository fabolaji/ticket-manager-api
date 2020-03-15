import User from '../entity/User'

export default class MockUser {
    public static correctUserDetails(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testFirstName';
        user.userName = 'testUserName';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static duplicateEmailUserDetails(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testFirstName';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static duplicateUsernamelUserDetails(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testFirstName';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static wrongEmailFormat(): User {
        const user = new User();
        user.id = 2;
		user.email = 'test.com';
        user.firstName = 'testFirstName';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static alphaNumUserNameFormat(): User {
        const user = new User();
        user.id = 2;
		user.email = 'test3@email.com';
        user.firstName = 'testFirstName';
        user.userName = 'test&&&&';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static emptyFirstNameField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = '';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static emptySpacesFirstNameField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = '   ';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static emptyLastNameField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testUserFirstName';
        user.userName = 'testUserName2';
		user.lastName = '';
        user.password = 'testPassword';
        return user;
    }
    public static emptySpacesLastNameField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testUserFirstName';
        user.userName = 'testUserName2';
		user.lastName = '     ';
        user.password = 'testPassword';
        return user;
    }
    public static emptyUserNameField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testUserFirstName';
        user.userName = '';
		user.lastName = 'testLastName';
        user.password = 'testPassword';
        return user;
    }
    public static emptyPasswordField(): User {
        const user = new User();
        user.id = 1;
		user.email = 'test@email.com';
        user.firstName = 'testUserFirstName';
        user.userName = 'testUserName2';
		user.lastName = 'testLastName';
        user.password = '';
        return user;
    }
    





}
