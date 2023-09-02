import { body, ValidationChain } from "express-validator";

export const movieValidator = (): Array<ValidationChain> => {
    return [
        body("title")
            .isString()
            .withMessage("O titulo precisa ser uma string")
            .isLength({ min: 5 })
            .withMessage("O titulo precisa ter no minimo 5 caracteres"),
        body("rating")
            .isNumeric()
            .withMessage("A nota precisa ser um numero")
            .custom((value: number): boolean => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa estar entre 0 e 10");
                }
                return true;
            })
    ];
}