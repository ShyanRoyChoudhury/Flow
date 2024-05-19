import { PrismaClient } from "@prisma/client";

export class PrismaClientManager {
    private static instance: PrismaClient; 

    private constructor() {
        // Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): PrismaClient {
        if (!PrismaClientManager.instance) {
            PrismaClientManager.instance = new PrismaClient();
        }
        return PrismaClientManager.instance;
    }
}