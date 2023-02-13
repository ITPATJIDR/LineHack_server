-- CreateTable
CREATE TABLE `Camp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campImageId` INTEGER NOT NULL,
    `campName` VARCHAR(191) NOT NULL,
    `campDescription` VARCHAR(191) NOT NULL,
    `campLocation` VARCHAR(191) NOT NULL,
    `bookingPrice` VARCHAR(191) NOT NULL,
    `campRating` INTEGER NOT NULL,
    `campPromotion` BOOLEAN NOT NULL DEFAULT false,
    `campPromotionRating` INTEGER NOT NULL,
    `campFeeDescription` VARCHAR(191) NOT NULL,
    `campModel` ENUM('EASY', 'MEDIUM', 'HARD') NOT NULL DEFAULT 'EASY',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemImage` VARCHAR(191) NOT NULL,
    `itemName` VARCHAR(191) NOT NULL,
    `itemPrice` VARCHAR(191) NOT NULL,
    `itemDescription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userImage` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `bananaPoint` VARCHAR(191) NOT NULL,
    `booking` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `campId` INTEGER NOT NULL,
    `bookingGenarateNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceImage` VARCHAR(191) NOT NULL,
    `serviceName` VARCHAR(191) NOT NULL,
    `serviceCategory` ENUM('FOOD', 'STORE', 'BEVERAGE') NOT NULL DEFAULT 'FOOD',
    `servicePrice` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CampImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campImagePath` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Camp` ADD CONSTRAINT `Camp_campImageId_fkey` FOREIGN KEY (`campImageId`) REFERENCES `CampImage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_campId_fkey` FOREIGN KEY (`campId`) REFERENCES `Camp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
