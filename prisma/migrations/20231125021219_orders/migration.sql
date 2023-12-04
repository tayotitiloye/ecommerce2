/*
  Warnings:

  - You are about to drop the column `intent_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Order_intent_id_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "intent_id",
DROP COLUMN "status",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "name" TEXT;
