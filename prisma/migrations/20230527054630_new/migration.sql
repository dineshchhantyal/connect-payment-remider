/*
  Warnings:

  - You are about to drop the column `type` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `type`,
    ADD COLUMN `paymentType` VARCHAR(191) NULL DEFAULT 'one-time';

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
