import ICircle from "../../../interfaces/circle.interface";
import { User, Circle } from '@prisma/client'

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface ICircleService {
    createCircle(newCircleInput: any):any
    deleteCircle(id: string, currentUser: string): Promise<void>
    checkMembership(id: string, currentUser: string): Promise<boolean>
    getCircle(id: string): Promise<Circle | null>
    listCircles(currentUser: string): Promise<{circle: Circle}[]>
    getMembers(id: string): Promise<{user: {username: string, profilePicture: string}}[] | null>
}
