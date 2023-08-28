export class UserService {
    users = [
        { name: 'John', isActive: true },
        { name: 'Mark', isActive: false },
        { name: 'Steve', isActive: true }
    ];

    AddNewUser(name: string, isActive: boolean) {
        this.users.push({ name: name, isActive: isActive });
    }
}