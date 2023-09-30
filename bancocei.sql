
BEGIN;


CREATE TABLE IF NOT EXISTS public.bairros
(
    id SERIAL NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default",
    cidade_id integer,
    CONSTRAINT bairros_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.cidades
(
    id SERIAL NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default",
    estados_id integer,
    CONSTRAINT cidade_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.contatos
(
    id SERIAL NOT NULL,
    usuarios_id integer,
    telefone character varying(20) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT contatos_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.estados
(
    id SERIAL NOT NULL,
    nome character varying(60) COLLATE pg_catalog."default",
    uf character varying(2) COLLATE pg_catalog."default",
    ddd integer,
    pais_id integer NOT NULL,
    CONSTRAINT estado_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.pais
(
    id SERIAL NOT NULL,
    nome character varying(60) COLLATE pg_catalog."default",
    sigla character varying(2) COLLATE pg_catalog."default",
    CONSTRAINT pais_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.responsavel
(
    id SERIAL NOT NULL,
    nome character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT responsavel_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.ruas
(
    id SERIAL NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default",
    cep character varying(8) COLLATE pg_catalog."default",
    bairro_id integer,
    CONSTRAINT rua_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tipo_contato
(
    id SERIAL NOT NULL,
    nome character varying(50) COLLATE pg_catalog."default",
    contatos_id integer,
    CONSTRAINT tipo_contato_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id SERIAL NOT NULL,
    nome character varying(200) COLLATE pg_catalog."default",
    cpf character varying(11) COLLATE pg_catalog."default" NOT NULL,
    data_nascimento date,
    sexo character(1) COLLATE pg_catalog."default",
    numero_casa character varying(11) COLLATE pg_catalog."default",
    nivel_acesso integer NOT NULL,
    status bit(1) NOT NULL,
    senha character varying COLLATE pg_catalog."default",
    data_cadastro date NOT NULL,
    responsavel_id integer,
    ruas_id integer,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.bairros
    ADD CONSTRAINT cidade_id_fkey FOREIGN KEY (cidade_id)
    REFERENCES public.cidades (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.cidades
    ADD CONSTRAINT cidade_id_fkey FOREIGN KEY (estados_id)
    REFERENCES public.estados (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.contatos
    ADD CONSTRAINT contatos_usuarios_id_fkey FOREIGN KEY (usuarios_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.estados
    ADD CONSTRAINT estado_id_fkey FOREIGN KEY (pais_id)
    REFERENCES public.pais (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.ruas
    ADD CONSTRAINT ruas_bairro_id_fkey FOREIGN KEY (bairro_id)
    REFERENCES public.bairros (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tipo_contato
    ADD CONSTRAINT tipo_contato_contatos_id_fkey FOREIGN KEY (contatos_id)
    REFERENCES public.contatos (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.usuarios
    ADD CONSTRAINT usuarios_idresponsavel_fkey FOREIGN KEY (responsavel_id)
    REFERENCES public.responsavel (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.usuarios
    ADD CONSTRAINT usuarios_ruas_id_fkey FOREIGN KEY (ruas_id)
    REFERENCES public.ruas (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
