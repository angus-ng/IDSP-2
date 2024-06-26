"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_middleware_1 = require("../../../middleware/authentication.middleware");
const getLocalUser_1 = require("../../../helper/getLocalUser");
const app_1 = require("../../../app");
const javascript_time_ago_1 = __importDefault(require("javascript-time-ago"));
const en_1 = __importDefault(require("javascript-time-ago/locale/en"));
javascript_time_ago_1.default.addLocale(en_1.default);
const timeAgo = new javascript_time_ago_1.default("en");
class UserController {
    constructor(userService) {
        this.path = "/user";
        this.router = express_1.default.Router();
        this.friend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const { requestee } = req.body;
                const data = yield this._service.friend(loggedInUser, requestee);
                if (data) {
                    if (data.status === "sentRequest") {
                        app_1.io.to(requestee).emit("sentFriendRequest", { requestee, requester: data.requester });
                    }
                    else if (data.status === "accept") {
                        app_1.io.to(data.requester).emit("acceptFriendRequest", { requestee, requester: data.requester });
                    }
                }
                res.status(200).json({ success: true, data: null });
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.unfriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const { requester, requestee } = req.body;
                if (loggedInUser === requester) {
                    const message = yield this._service.unfriend(requester, requestee);
                    res.status(200).json({ success: true, data: message });
                }
                else {
                    res.status(400).json({ success: false, error: "Failed to unfriend" });
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const { username } = req.body;
                const friends = yield this._service.getFriends(username);
                res.status(200).json({ success: true, data: friends });
            }
            catch (err) {
                return res.status(200).json({ success: true, data: null, error: "failed to get friends" });
            }
        });
        this.getActivities = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const activities = yield this._service.getActivities(loggedInUser);
                res.status(200).json({ success: true, data: activities });
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.clearActivities = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const data = yield this._service.clearActivities(loggedInUser);
                res.status(200).json({ success: true, data: data });
            }
            catch (error) {
            }
        });
        this.acceptFriendRequest = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const { requester, requestee } = req.body;
                if (loggedInUser === requestee) {
                    const data = yield this._service.acceptRequest(requester, requestee);
                    app_1.io.to(requester).emit("acceptFriendRequest", { requestee, requester });
                    res.status(200).json({ success: true, data: null });
                }
                else {
                    res.status(400).json({ success: false, error: "Failed to accept friend request" });
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.removeFriendRequest = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const { user1, user2 } = req.body;
                if (loggedInUser === user2 || loggedInUser === user1) {
                    yield this._service.removeRequest(user1, user2);
                    res.status(200).json({ success: true, data: null });
                }
                else {
                    res.status(400).json({ success: false, error: "Failed to accept friend request" });
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.search = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const input = decodeURIComponent(req.params.input).slice(0, -1);
                const output = yield this._service.search(input, loggedInUser);
                res.status(200).json({ success: true, data: output });
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.searchAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const output = yield this._service.search("", loggedInUser);
                res.status(200).json({ success: true, data: output });
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                let { username } = req.body;
                const profileObj = yield this._service.getUser(username, loggedInUser);
                res.status(200).json({ success: true, data: profileObj });
            }
            catch (error) {
                res.status(200).json({ success: true, data: null, error: error });
            }
        });
        this.ifEmailTaken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const emailTaken = yield this._service.ifEmailTaken(email);
                res.status(200).json({ success: emailTaken });
            }
            catch (error) {
                res.status(200).json({ error: error });
            }
        });
        this.profilePicture = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const src = yield this._service.getProfilePicture(loggedInUser);
                res.status(200).json({ success: true, data: src });
            }
            catch (err) {
                res.status(200).json({ success: true, data: null, error: "failed to get album feed" });
            }
        });
        this.updateProfilePicture = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { src } = req.body;
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const newProfilePicture = yield this._service.updateProfilePicture(loggedInUser, src);
            }
            catch (err) {
                res.status(200).json({ success: true, data: null, error: "failed to update profile picture" });
            }
        });
        this.updateDisplayName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const newDisplayName = yield this._service.updateDisplayName(loggedInUser, name);
            }
            catch (err) {
            }
        });
        this.getInfoForMap = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const info = yield this._service.getInfoForMap(loggedInUser);
                res.status(200).json({ success: true, data: info });
            }
            catch (error) {
                res.status(200).json({ success: true, data: null });
            }
        });
        this.getFeed = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = yield (0, getLocalUser_1.getLocalUser)(req, res);
                const albumFeed = yield this._service.getFeed(loggedInUser);
                if (Array.isArray(albumFeed)) {
                    const formattedAlbumFeed = albumFeed.map(album => (Object.assign(Object.assign({}, album), { createdAt: timeAgo.format(album.createdAt) })));
                    res.status(200).json({ success: true, data: formattedAlbumFeed });
                }
            }
            catch (err) {
                res.status(200).json({ success: true, data: null, error: "failed to get album feed" });
            }
        });
        this.initializeRoutes();
        this._service = userService;
    }
    initializeRoutes() {
        this.router.post(`${this.path}/sendFriendRequest`, authentication_middleware_1.ensureAuthenticated, this.friend);
        this.router.post(`${this.path}/unfriend`, authentication_middleware_1.ensureAuthenticated, this.unfriend);
        this.router.post(`${this.path}/getFriends`, authentication_middleware_1.ensureAuthenticated, this.getFriends);
        this.router.get(`${this.path}/getActivities`, authentication_middleware_1.ensureAuthenticated, this.getActivities);
        this.router.post(`${this.path}/accept`, authentication_middleware_1.ensureAuthenticated, this.acceptFriendRequest);
        this.router.post(`${this.path}/removeRequest`, authentication_middleware_1.ensureAuthenticated, this.removeFriendRequest);
        this.router.get(`${this.path}/search/:input(*)`, authentication_middleware_1.ensureAuthenticated, this.search);
        this.router.get(`${this.path}/searchAll`, authentication_middleware_1.ensureAuthenticated, this.searchAll);
        this.router.post(`${this.path}/get`, authentication_middleware_1.ensureAuthenticated, this.getUser);
        this.router.get(`${this.path}/ifEmailTaken/:email`, this.ifEmailTaken);
        this.router.get(`${this.path}/profilePicture`, authentication_middleware_1.ensureAuthenticated, this.profilePicture);
        this.router.get(`${this.path}/feed`, authentication_middleware_1.ensureAuthenticated, this.getFeed);
        this.router.post(`${this.path}/updateProfilePicture`, authentication_middleware_1.ensureAuthenticated, this.updateProfilePicture);
        this.router.post(`${this.path}/updateDisplayName`, authentication_middleware_1.ensureAuthenticated, this.updateDisplayName);
        this.router.get(`${this.path}/mapInfo`, authentication_middleware_1.ensureAuthenticated, this.getInfoForMap);
        this.router.post(`${this.path}/clearActivities`, authentication_middleware_1.ensureAuthenticated, this.clearActivities);
    }
}
exports.default = UserController;
