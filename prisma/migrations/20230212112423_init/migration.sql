/*
  Warnings:

  - You are about to drop the column `campImageId` on the `camp` table. All the data in the column will be lost.
  - You are about to drop the `campimage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `campImage` to the `Camp` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `camp` DROP FOREIGN KEY `Camp_campImageId_fkey`;

-- AlterTable
ALTER TABLE `camp` DROP COLUMN `campImageId`,
    ADD COLUMN `campImage` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `campimage`;
