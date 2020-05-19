"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_decorators_1 = require("fastify-decorators");
const models_1 = require("src/models");
let AccessLoggerService = class AccessLoggerService {
    logAction(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const log = new models_1.Log({
                device_ip: options.device ? .ip || options.ip : ,
                device_name: options.device ? .name || 'N/D' : ,
                i_device: options.device ? .i_device : ,
                i_role: options ? .card ? .i_role :  : ,
                role_name: options ? .card ? .role ? .name || 'N/D' :  :  : ,
                access: !options.error,
                time: new Date(),
                error: options.error,
                i_card: options ? .card ? .i_card :  : ,
                card_name: options ? .card ? .name || 'N/D' :  : ,
                uuid: options ? .card ? .uuid || options.uuid || 'N/D'
                    :
                    :
            });
            log.save();
        });
    }
};
AccessLoggerService = __decorate([
    fastify_decorators_1.Service()
], AccessLoggerService);
exports.AccessLoggerService = AccessLoggerService;
//# sourceMappingURL=access-logger.service.js.map