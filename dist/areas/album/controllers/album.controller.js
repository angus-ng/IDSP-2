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
exports.config = void 0;
const express_1 = require("express");
const authentication_middleware_1 = require("../../../middleware/authentication.middleware");
const HandleSingleUpload_1 = require("../../../helper/HandleSingleUpload");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
class AlbumController {
    constructor(circleService) {
        this.path = "/circle";
        this.router = (0, express_1.Router)();
        this.showDashboard = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render('circle/views/dashboard');
        });
        this.uploadImages = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const b64 = Buffer.from(req.file.buffer).toString('base64');
            const dataURI = `data:${req.file.mimetype};base64,${b64}`;
            const cldRes = yield (0, HandleSingleUpload_1.handleUpload)(dataURI);
            res.json({ message: 'File uploaded successfully', data: cldRes.url });
        });
        this.createAlbum = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedInUser = req.user.username;
                const { albumName, pictureList } = req.body;
                console.log(req.body, "logged");
                const newAlbumInput = {
                    creator: loggedInUser,
                    name: albumName,
                    pictureList: pictureList
                };
                //validate the input before passing it to our db
                this._service.createAlbum(newAlbumInput);
                res.status(200).json({ success: true, data: newAlbumInput });
            }
            catch (err) {
                //throw err;
            }
        });
        //   private deleteCircle = async (req:Request, res:Response) => {
        //     try {
        //       let loggedInUser = req.user!.username
        //         const { id } = req.params
        //         await this._service.deleteCircle(id, loggedInUser) //this method also checks if its the owner of the circle, maybe a check should be done separately
        //         res.redirect("/");
        //     } catch (err) {
        //         throw err;
        //     }
        //   }
        this.showAlbum = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                //ensure user is a member of the circle
                let loggedInUser = req.user.username;
                const member = yield this._service.checkMembership(id, loggedInUser);
                if (!member) {
                    return res.redirect("/");
                }
                const circle = yield this._service.getAlbum(id);
                console.log(circle);
                res.render('circle/views/circle');
            }
            catch (err) {
                throw err;
            }
        });
        //   private showInvite = async (req:Request, res:Response) => {
        //     const { id } = req.params
        //     //ensure user is a member of the circle
        //     let loggedInUser = req.user!.username
        //     const member = await this._service.checkMembership(id, loggedInUser)
        //     if (!member){
        //       return res.redirect("/")
        //     }
        //     res.render('circle/views/invite')
        //   }
        //   private circleInvite = async (req:Request, res:Response) => {
        //     let loggedInUser = req.user!.username
        //     console.log(req.body)
        //     //change to verify selected are friends of current user
        //     res.redirect("/")
        //   }
        this.getAlbumList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let loggedInUser = req.user.username;
            console.log(loggedInUser);
            const circles = yield this._service.listAlbums(loggedInUser);
            res.json({ success: true, data: circles });
        });
        this.initializeRoutes();
        this._service = circleService;
    }
    initializeRoutes() {
        this.router.get(`${this.path}/create`, authentication_middleware_1.ensureAuthenticated, this.showDashboard);
        this.router.post(`${this.path}/create`, authentication_middleware_1.ensureAuthenticated, upload.none(), this.createAlbum);
        this.router.post(`${this.path}/upload`, authentication_middleware_1.ensureAuthenticated, upload.single("file"), this.uploadImages);
        this.router.get(`${this.path}/:id`, authentication_middleware_1.ensureAuthenticated, this.showAlbum);
        //this.router.get(`${this.path}/:id/delete`, ensureAuthenticated, this.deleteCircle);
        //this.router.get(`${this.path}/:id/invite`, ensureAuthenticated, this.showInvite);
        //this.router.post(`${this.path}/:id/invite`, ensureAuthenticated, this.circleInvite);
        this.router.post(`${this.path}/list`, authentication_middleware_1.ensureAuthenticated, this.getAlbumList);
    }
}
exports.default = AlbumController;
exports.config = {
    api: {
        bodyParser: false,
    },
};