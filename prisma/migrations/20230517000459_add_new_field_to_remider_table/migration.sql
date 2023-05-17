-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `category` VARCHAR(191) NULL DEFAULT 'other',
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `link` VARCHAR(191) NULL,
    ADD COLUMN `paymentMethod` VARCHAR(191) NULL DEFAULT 'paypal',
    ADD COLUMN `timezones` VARCHAR(191) NULL DEFAULT 'America/Los_Angeles',
    ADD COLUMN `type` VARCHAR(191) NULL DEFAULT 'one-time';
