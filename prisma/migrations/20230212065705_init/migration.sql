/*
  Warnings:

  - You are about to drop the column `bookingGenarateNumber` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `campModel` on the `Camp` table. All the data in the column will be lost.
  - You are about to drop the column `servicePrice` on the `Servive` table. All the data in the column will be lost.
  - Added the required column `campFacility` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campFacilityDescription` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceContact` to the `Servive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceDescription` to the `Servive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceDistance` to the `Servive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `bookingGenarateNumber`;

-- AlterTable
ALTER TABLE `Camp` DROP COLUMN `campModel`,
    ADD COLUMN `campFacility` BOOLEAN NOT NULL,
    ADD COLUMN `campFacilityDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `campMode` ENUM('EASY', 'MEDIUM', 'HARD') NOT NULL DEFAULT 'EASY';

-- AlterTable
ALTER TABLE `Servive` DROP COLUMN `servicePrice`,
    ADD COLUMN `serviceContact` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceDistance` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceLineContact` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `CampFacilityDescription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tentRenting` BOOLEAN NOT NULL,
    `wift` BOOLEAN NOT NULL,
    `activity` BOOLEAN NOT NULL,
    `suitBestFor` VARCHAR(191) NOT NULL,
    `nearbyRestaurant` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
