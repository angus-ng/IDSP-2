import { User } from "@prisma/client"

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface IUserService {
    follow(followerName: string, followingName: string): Promise<void>
    unfollow(followerName: string, followingName: string): Promise<void>
    getFollowers(followingName: string): Promise<string[] | void>
    getFollowing(followerName: string): Promise<string[] | void>
}