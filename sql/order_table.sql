CREATE TYPE CURRENCY AS ENUM ('USD','CAD','EUR','ETH','MATIC','AKX');
CREATE TYPE ORDER_STATUS AS ENUM ('NONE','PENDING','PAID','COMPLETED','ERROR');
CREATE TYPE PAYMENT_METHOD AS ENUM ('PAYPAL','CRYPTO','OTHER');


DROP TABLE IF EXISTS "public"."orders";
CREATE TABLE "public"."orders" (
                                   "order_id" uuid NOT NULL,
                                   "order_item" int8 NOT NULL,
                                   "beneficiary" varchar(42) COLLATE "pg_catalog"."default" NOT NULL,
                                   "item_qty" float4 NOT NULL,
                                   "item_price" float4 NOT NULL,
                                   "currency_type" CURRENCY COLLATE "pg_catalog"."default" NOT NULL,
                                   "base_item_price" float4 NOT NULL,
                                   "base_currency"  CURRENCY COLLATE "pg_catalog"."default" NOT NULL,
                                   "order_fee_type" varchar(30) COLLATE "pg_catalog"."default" NOT NULL DEFAULT ''::character varying,
                                   "order_fee_amt" float4 NOT NULL DEFAULT 0,
                                   "status" ORDER_STATUS COLLATE "pg_catalog"."default" NOT NULL DEFAULT ''::character varying
)
;
ALTER TABLE "public"."orders" OWNER TO "postgres";
COMMENT ON COLUMN "public"."orders"."order_id" IS 'Order id linked on frontend session';

-- ----------------------------
-- Primary Key structure for table orders
-- ----------------------------
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id");


