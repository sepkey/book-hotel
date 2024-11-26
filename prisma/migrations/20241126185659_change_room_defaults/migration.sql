/*
  Warnings:

  - You are about to drop the column `requlaarPrice` on the `room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `room` DROP COLUMN `requlaarPrice`,
    ADD COLUMN `reqularPrice` DOUBLE NULL DEFAULT 0,
    MODIFY `maxCapacity` INTEGER NULL DEFAULT 1,
    MODIFY `discount` INTEGER NULL DEFAULT 0,
    MODIFY `description` VARCHAR(191) NULL DEFAULT '',
    MODIFY `image` VARCHAR(191) NULL DEFAULT '';
