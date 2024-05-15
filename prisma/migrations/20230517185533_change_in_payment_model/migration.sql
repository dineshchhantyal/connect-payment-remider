/*
  Warnings:

  - You are about to drop the column `content` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `content`,
    DROP COLUMN `published`,
    ADD COLUMN `description` VARCHAR(191) NULL;
